export default function formatDate(date) {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = (d.getMonth() + 1).toString().padStart(2, 0)
  const day = d
    .getDate()
    .toString()
    .padStart(2, 0)

  return `${year}-${month}-${day}`
}
