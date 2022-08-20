export const rules = {
  number: [
    {
      required: true,
      message: "手机号是必传内容~",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{11}$/,
      message: "手机号必须是11个数字~",
      trigger: "blur"
    }
  ],
  code: [
    {
      required: true,
      message: "验证码是必传内容~",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{4}$/,
      message: "验证码必须是4个数字~",
      trigger: "blur"
    }
  ]
};
