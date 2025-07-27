import { idToUuid } from 'notion-utils'
import { checkStrIsNotionId, getLastPartOfUrl, isBrowser } from '../utils'

export const convertInnerUrl = allPages => {
  if (!isBrowser) { return }
  const allAnchorTags = document
    ?.getElementById('notion-article')
    ?.querySelectorAll('a.notion-link')
  if (!allAnchorTags) { return }
  const currentURL = window.location.origin + window.location.pathname
  // url替换成slug
  for (const anchorTag of allAnchorTags) {
    // 检查url
    if (anchorTag?.href) {
      // 如果url是一个Notion_id，尝试匹配成博客的文章内链
      const slug = getLastPartOfUrl(anchorTag.href)
      if (checkStrIsNotionId(slug)) {
        const slugPage = allPages?.find(page => {
          const find = idToUuid(slug).indexOf(page.short_id) === 0
          return find
        })
        if (slugPage) {
          anchorTag.href = slugPage?.href
        }
      }

     // 让所有链接在新标签页打开
     anchorTag.target = '_blank'
     // 添加安全属性
     anchorTag.rel = 'noopener noreferrer'

    }
  }
}