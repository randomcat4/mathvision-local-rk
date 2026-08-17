export const SAMPLE_WRITEUP_CHAT_ID = "sample-writeup-chat";
export const SAMPLE_WRITEUP_USER_ID = "sample-user";
export const SAMPLE_WRITEUP_MESSAGE_INDEX = 1;
export const SAMPLE_WRITEUP_SOURCE = String.raw`\documentclass{article}
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
