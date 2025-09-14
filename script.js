// script.js
console.log("最短最速学習塾 LP script loaded.");

// 今後の機能拡張用のファイルです。
// 例えば、LINE登録ボタンのURLを動的に設定したり、
// スクロールに応じたアニメーションなどを追加できます。

document.querySelectorAll('.line-button').forEach(button => {
    // 注意：下記のURLはダミーです。実際のLINE登録URLに書き換えてください。
    button.href = 'https://line.me/R/ti/p/YOUR_LINE_ID';
});
