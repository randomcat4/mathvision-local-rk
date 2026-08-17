import { readFile, readdir, writeFile } from "node:fs/promises";
import { extname, resolve } from "node:path";

const root=resolve(".");
const applicationModules=(await readFile(resolve(root,"reports/application-modules.txt"),"utf8")).split(/\r?\n/).map(value=>value.trim()).filter(Boolean);
const vendorModules=new Set((await readFile(resolve(root,"reports/vendor-modules.txt"),"utf8")).split(/\r?\n/).map(value=>value.trim()).filter(Boolean));
const mixedModules=new Set((await readFile(resolve(root,"reports/mixed-boundary-modules.txt"),"utf8")).split(/\r?\n/).map(value=>value.trim()).filter(Boolean));
const assembly=await readFile(resolve(root,"tools/assemble-source.mjs"),"utf8");
const compatibilityModules=new Set([...assembly.matchAll(/^\s+"([^"]+)",$/gm)].map(match=>`${match[1]}.js`));
const elevated=applicationModules.filter(name=>compatibilityModules.has(name));
const remaining=applicationModules.filter(name=>!compatibilityModules.has(name)&&!vendorModules.has(name)&&!mixedModules.has(name));
const sourceFiles=await walk(resolve(root,"src"));
const recoveredViewRoot=resolve(root,"src/views/recovered");
const recoveredVendorRoot=resolve(root,"src/vendor/recovered");
const recoveredModuleRoot=resolve(root,"src/recovered");
const recoveredProductionViews=sourceFiles.filter(path=>path.startsWith(recoveredViewRoot)&&extname(path)===".tsx");
const recoveredVendorModules=sourceFiles.filter(path=>path.startsWith(recoveredVendorRoot)&&[".ts",".tsx"].includes(extname(path)));
const recoveredSupportModules=sourceFiles.filter(path=>path.startsWith(recoveredModuleRoot)&&[".ts",".tsx"].includes(extname(path)));
const strictFiles=sourceFiles.filter(path=>[".ts",".tsx"].includes(extname(path))&&!path.startsWith(recoveredViewRoot)&&!path.startsWith(recoveredVendorRoot)&&!path.startsWith(recoveredModuleRoot)&&!path.includes(`${resolve(root,"src/chunks")}`));
const noCheckFiles=[];for(const path of sourceFiles){if([".ts",".tsx",".js",".jsx"].includes(extname(path))&&(await readFile(path,"utf8")).includes("@ts-nocheck"))noCheckFiles.push(path);}
const report={generatedAt:new Date().toISOString(),applicationCandidates:applicationModules.length,elevatedApplicationModules:elevated.length,recoveredProductionViews:recoveredProductionViews.length,recoveredSupportModules:recoveredSupportModules.length,recoveredVendorModules:recoveredVendorModules.length,recoveredViewCheck:"syntax-and-production-build",frozenVendorModules:[...vendorModules].length,mixedBoundaryModules:[...mixedModules].length,remainingApplicationModules:remaining.map(name=>name.replace(/\.js$/,"")),strictSourceFiles:strictFiles.length,tsNoCheckFiles:noCheckFiles.length};
await writeFile(resolve(root,"reports/recovery-inventory.json"),`${JSON.stringify(report,null,2)}\n`,`utf8`);console.log(JSON.stringify(report,null,2));
async function walk(directory){const result=[];for(const entry of await readdir(directory,{withFileTypes:true})){const path=resolve(directory,entry.name);if(entry.isDirectory())result.push(...await walk(path));else result.push(path);}return result;}
