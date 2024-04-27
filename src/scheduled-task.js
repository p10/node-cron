import EventEmitter from "events";
import Task from "./task.js";
import Scheduler from "./scheduler.js";
import * as uuid from "uuid";
class ScheduledTask extends EventEmitter {
  constructor(cronExpression, func, options) {
    super();
    if (!options) {
      options = {
        scheduled: true,
        recoverMissedExecutions: false,
      };
    }
    this.options = options;
    this.options.name = this.options.name || uuid.v4();
    this._task = new Task(func);
    this._scheduler = new Scheduler(
      cronExpression,
      options.timezone,
      options.recoverMissedExecutions,
    );
    this._scheduler.on("scheduled-time-matched", (now) => {
      this.now(now);
    });
    if (options.scheduled !== false) {
      this._scheduler.start();
    }
    if (options.runOnInit === true) {
      this.now("init");
    }
  }
  now(now = "manual") {
    let result = this._task.execute(now);
    this.emit("task-done", result);
  }
  start() {
    this._scheduler.start();
  }
  stop() {
    this._scheduler.stop();
  }
}
export default ScheduledTask;
