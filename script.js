/**
 * kindle unlimited検索
 *
 * 2018-11-17版
 */
function search() {
  var word = document.getElementById("word").value;
  var word_enc = encodeURIComponent(word);
  var url =
    "https://www.amazon.co.jp/s?k=" +
    word_enc +
    "&rh=n%3A5298794051&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&ref=nb_sb_noss";
  window.open(url, "_blank");
}
