HISTSIZE=10000
HISTFILESIZE=20000

for i in /usr/share/bash-completion/completions/*
do
  . $i &> /dev/null
done

GIT_PS1_SHOWDIRTYSTATE=true
GIT_PS1_SHOWSTASHSTATE=true
GIT_PS1_SHOWUNTRACKEDFILES=true
GIT_PS1_SHOWCOLORHINTS=true
source /usr/lib/git-core/git-sh-prompt
PS1='\[\033[01;36m\]\w\[\033[01;32m\]$(__git_ps1 " (%s)")\[\033[00m\]
\$ '

alias ls='ls --color=auto --group-directories-first -F'
