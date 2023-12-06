export const formatDate = (date: String, time = false) => {
  if (!date) return
  const newDate = new Date(date)
  return !time ? newDate.toLocaleDateString('pt-BR') : newDate.toLocaleString('pt-BR', {hour: 'numeric', minute: 'numeric'})
}