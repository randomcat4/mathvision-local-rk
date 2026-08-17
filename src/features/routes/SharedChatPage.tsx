import { useCallback, useMemo, useRef } from "#production-react";
import { getSharedChat, CHAT_GC_TIME_MS } from "../../api/chats/client";
import { indexMessageOrdinals } from "../../domain/chat/messageSelectors";
import { SharedAttachmentScope } from "../attachments/useAttachmentContent";
import { formatSharedChatUpdatedAt, makeSharedMessageKey } from "./sharedChatRoute";
import { alpha, ArrowBackIcon, AssistantMessage, AutoAwesomeRounded, Avatar, Box, chatQueryKeys, EmptyState, getErrorMessage, getMessageMathMacros, LinkButton, LinkOffIcon, LoadingState, MarkdownScope, sharedChatRoute, SharedIcon, Stack, Typography, UNTITLED_CHAT_TITLE, useQuery, UserMessage } from "../../runtime/sharedChatRuntime.js";

type SharedChat = Awaited<ReturnType<typeof getSharedChat>>;
interface SharedTheme { spacing(value: number): string; palette: { background: { default: string }; text: { primary: string } } }
const pageStyles = (theme: SharedTheme) => ({ minHeight: "100dvh", backgroundColor: theme.palette.background.default, color: theme.palette.text.primary });
const contentStyles = { width: "100%", maxWidth: "76rem", minHeight: "100dvh", mx: "auto", px: { xs: 1.5, sm: 2.5, md: 4 }, py: { xs: 2, md: 3 } };
const headerStyles = (theme: SharedTheme) => ({ alignItems: { xs: "flex-start", sm: "center" }, justifyContent: "space-between", gap: theme.spacing(2), py: theme.spacing(1.5) });
const identityStyles = (theme: SharedTheme) => ({ alignItems: "center", minWidth: 0, gap: theme.spacing(1.4) });
const eyebrowStyles = (theme: SharedTheme) => ({ display: "inline-flex", alignItems: "center", gap: theme.spacing(0.65) });
const titleStyles = { mt: 0.45 };
const updatedStyles = { mt: 0.65 };
const messagesStyles = (theme: SharedTheme) => ({ pt: theme.spacing(1.5), pb: theme.spacing(5), borderTop: `1px solid ${alpha(theme.palette.text.primary, 0.08)}` });
const fullHeightStyles = { minHeight: "calc(100dvh - 4rem)" };
const noAction = () => {};

export function SharedChatView({ chatId }: { chatId: string }) {
  const query = useQuery<SharedChat>({ queryKey: chatQueryKeys.sharedChat(chatId), queryFn: () => getSharedChat(chatId), retry: false, gcTime: CHAT_GC_TIME_MS });
  const chat = query.data ?? null;
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const updatedAt = useMemo(() => chat ? formatSharedChatUpdatedAt(chat.lastUpdated) : null, [chat]);
  const onQuoteClick = useCallback((messageIndex: number) => { const message = chat?.messages[messageIndex]; if (!message || !["user", "assistant"].includes(message.role)) throw new Error(`Could not find quoted source message ${messageIndex}.`); const element = messagesRef.current?.querySelector(`[data-message-index="${messageIndex}"]`); if (!element) throw new Error(`Could not render quoted source message ${messageIndex}.`); element.scrollIntoView({ behavior: "smooth", block: "center" }); }, [chat]);
  if (query.isPending) return <Box sx={pageStyles}><Box sx={contentStyles}><LoadingState text="Opening shared chat" subtext="Fetching the chat snapshot." tone="shared" sx={fullHeightStyles}/></Box></Box>;
  if (query.isError || !chat) { const error = query.error ?? new Error("Shared chat was not returned."); return <Box sx={pageStyles}><Box sx={contentStyles}><EmptyState title="Shared chat unavailable" subtitle={getErrorMessage(error)} icon={<LinkOffIcon/>} sx={fullHeightStyles}><LinkButton to="/" variant="contained" startIcon={<ArrowBackIcon fontSize="small"/>} sx={{ mt: 1 }}>Back to App</LinkButton></EmptyState></Box></Box>; }
  const title = chat.title ?? UNTITLED_CHAT_TITLE;
  const messages = chat.messages;
  const ordinals = indexMessageOrdinals(messages);
  const macros = getMessageMathMacros(messages);
  return <Box sx={pageStyles}><Stack sx={contentStyles}><Stack component="header" direction="row" sx={headerStyles}><Stack direction="row" sx={identityStyles}><Avatar><AutoAwesomeRounded/></Avatar><Stack sx={{ minWidth: 0 }}><Stack component="span" direction="row" sx={eyebrowStyles}><SharedIcon color="primary" sx={{ fontSize: "1rem" }}/><Typography component="span" variant="sharedPageEyebrow" color="primary">Shared chat</Typography></Stack><Box sx={titleStyles}><Typography component="h1" variant="sharedPageTitle">{title}</Typography></Box>{updatedAt ? <Box sx={updatedStyles}><Typography component="p" variant="sharedPageMeta" color="textSecondary">Updated {updatedAt}</Typography></Box> : null}</Stack></Stack><LinkButton to="/" variant="outlined" startIcon={<ArrowBackIcon fontSize="small"/>} sx={{ flex: "0 0 auto" }}>Open app</LinkButton></Stack>{messages.length > 0 ? <Stack ref={messagesRef} component="main" spacing={0.35} sx={messagesStyles}>{messages.map((message, index) => { const ordinal = ordinals.get(index); return <div data-message-index={index} key={makeSharedMessageKey(message, index)}><MarkdownScope macros={macros[index]}>{message.role === "assistant" ? <AssistantMessage message={message} messageIndex={index} responseNumber={ordinal?.responseNumber} availableModels={[]} areCitationPreviewsEnabled={false} areWriteupActionsEnabled={false}/> : <UserMessage message={message} queryNumber={ordinal?.queryNumber} isLatestUserMessage={false} areLatestUserActionsDisabled={true} onRetryLatestUserMessage={noAction} onEditLatestUserMessage={noAction} onQuoteClick={onQuoteClick}/>}</MarkdownScope></div>; })}</Stack> : <EmptyState title="No messages yet" subtitle="This shared chat does not contain any messages." icon={<AutoAwesomeRounded/>} sx={{ minHeight: "28rem", mt: 2 }}/>}</Stack></Box>;
}

export function SharedChatPage({ chatId }: { chatId: string }) { return <SharedAttachmentScope chatId={chatId}><SharedChatView chatId={chatId}/></SharedAttachmentScope>; }
export function SharedChatRoute() { const { chatId } = sharedChatRoute.useParams(); return <SharedChatPage chatId={chatId}/>; }
