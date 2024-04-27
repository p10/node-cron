import ScheduledTask from "../scheduled-task.js";
let scheduledTask;
function register(message) {
    scheduledTask = new ScheduledTask(message.cron, script.task, message.options);
    scheduledTask.on('task-done', (result) => {
        process.send({ type: 'task-done', result });
    });
    process.send({ type: 'registred' });
}
process.on('message', (message) => {
    switch (message.type) {
        case 'register':
            return register(message);
    }
});
