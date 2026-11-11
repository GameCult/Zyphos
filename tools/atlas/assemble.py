#!/usr/bin/env python3
"""Assemble an Atlas sheet's markdown: canon read from the vault, proposals read from the proposal file.

  assemble.py <canon note .md> <proposal .md> <vault-commit> > sheet.md

The canon card is the vault note's own paragraphs, unedited except that wikilink brackets are dropped. Every card
after it comes from the proposal file's `## Sheet text` section, one card per `###` heading, so canon and proposals
stay in separate files and a proposal cannot enter the canon card.
"""
import re, subprocess, sys
from pathlib import Path

canon, proposal, commit = sys.argv[1:4]
note = Path(canon).read_text(encoding="utf8")
title, _, body = note.lstrip("﻿").partition("\n")
assert title.startswith("# "), f"{canon}: first line is not a title"
body = re.sub(r"\[\[(?:[^\]|]*\|)?([^\]]+)\]\]", r"\1", body).strip()
authors = subprocess.run(["git", "log", "--format=%an", "--", canon], capture_output=True, text=True, check=True).stdout.splitlines()
by = ", ".join(dict.fromkeys(authors))
text = Path(proposal).read_text(encoding="utf8")
m = re.search(r"^## Sheet text\n(.*?)(?=^## |\Z)", text, re.S | re.M)
assert m, f"{proposal}: no `## Sheet text` section"
print(f"{title}\n\nVault note at {commit}; text by {by}. Proposals are marked and are not in the vault.\n")
print(f"## The note\n\n{body}\n")
cards = m.group(1).strip()
print(re.sub(r"^### ", "## ", cards[cards.index("### "):], flags=re.M))
