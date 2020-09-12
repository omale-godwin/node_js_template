module.exports = {
  webToken: {
    secretKey:
      "3%&gkddh^&**434tgdghdg8809746423hgd6CCSBdjfifu5372BBSyghsf646974047^^&*$##2",
    expiresIn: 3600, //1 hour
  },
  mongoDb: {
    host: "mongodb+srv://",
    port: "27017",
    username: "omaleuser",
    password: "omalepass",
    database: "omale",
  },
  AService: {
    sendUri: "http://localhost:3001/api/v1/AService",
  },
  redisDb: {
    host: "localhost",
    port: 6379,
    db: 0,
  },
};
