// https://www.zhangxinxu.com/wordpress/2017/07/js-text-string-download-as-html-json-file/

export function downloadText (content, filename) {
  const eleLink = document.createElement('a')
  eleLink.download = filename
  eleLink.style.display = 'none'

  const blob = new Blob([content])
  eleLink.href = URL.createObjectURL(blob)

  document.body.appendChild(eleLink)
  eleLink.click()
  document.body.removeChild(eleLink)
}
