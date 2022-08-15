const tasksIndex = require('/agenda/commons/db').in('tasks')

module.exports = ({ body }, res) => {
  const { name, where, who, start_date, end_date, why } = body
  const created_at = Date.now().toString()

  const task = tasksIndex.new()
  task.writeMany({ name, where, who, start_date, end_date, why, created_at })

  return res.json({ id: task.getId(), created_at })
}