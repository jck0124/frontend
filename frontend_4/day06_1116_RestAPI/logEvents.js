// 모듈 만들어 두고 계속 사용하기
const fs = require("fs");
const fsPromise = fs.promises;
const { format } = require("date-fns");
const { v4: uuidv4 } = require("uuid"); // npm i uuid

const logEvents = async (message) => {
  const today = new Date();
  const date = format(today, "yy-MM-dd\tHH:mm:ss");
  const log = `\n ${date} \t ${uuidv4()} \t ${message} `;

  try {
    if (!fs.existsSync("./log")) {
      await fsPromise.mkdir("./log");
    }

    await fsPromise.appendFile("./log/eventLog.txt", log);
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
