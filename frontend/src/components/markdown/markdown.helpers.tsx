/**
 * @param input  takes a string, replaces all occurrences of
 * '[h1]:' with '# ' (which is Markdown for a first level heading),
 * and replaces all occurrences of '[p]:' with a newline.
 * The 'g' flag in the regular expressions tells the replace function to replace all occurrences, not just the first one.
 * @returns string
 */
export const convertToMarkdown = (input: string) => {
  let markdown = input
  markdown = markdown.replace(/\[h1\]:/g, '\n# ')
  markdown = markdown.replace(/\[p\]:/g, '\n')
  return markdown
}