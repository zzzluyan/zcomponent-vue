const fs = require('fs');
const path = require('path');
const hash = require('hash-sum');
const LRU = require('lru-cache');
const highlight = require('highlight.js');

// markdown-it 插件
const emoji = require('markdown-it-emoji');
const anchor = require('markdown-it-anchor');
const toc = require('markdown-it-table-of-contents');
const container = require('markdown-it-container');

// container = 