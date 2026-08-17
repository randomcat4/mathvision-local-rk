const e = "sample-writeup-chat",
  n = "sample-user",
  t = 1,
  o = String.raw`\documentclass{article}
\usepackage{amsmath,amsthm}
\newtheorem{theorem}{Theorem}
\title{A Sample Proof}
\date{}
\begin{document}
\maketitle
\begin{theorem}
For every integer $n$, if $n$ is even, then $n^2$ is even.
\end{theorem}
\begin{proof}
Let $n$ be even. Then $n=2k$ for some integer $k$. Therefore
\[
n^2=(2k)^2=4k^2=2(2k^2).
\]
Since $2k^2$ is an integer, $n^2$ is even.
\end{proof}
\end{document}`;
export { n as S, e as a, o as b, t as c };
