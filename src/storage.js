import * as uuid from "uuid";
export default (() => {
    if (!global.scheduledTasks) {
        global.scheduledTasks = new Map();
    }
    return {
        save: (task) => {
            if (!task.options) {
                task.options = {};
                task.options.name = uuid.v4();
            }
            global.scheduledTasks.set(task.options.name, task);
        },
        getTasks: () => {
            return global.scheduledTasks;
        }
    };
})();
