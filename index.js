const reCaptchaSecret = "6LeIypghAAAAABEpBkQm6FwdausiSfhWmWx2zBxg"

fetch(
  `https://www.google.com/recaptcha/api/siteverify?secret=${reCaptchaSecret}&response=${"03ANYolqsRsQVk5r5fbjzwO-rARo3Pfri2MtLMmUDR4rJErsGErrNViF9LpqVx5itVisohuyTLf2mW5tiYho7DbS2ebDlQkeGacqtlmqzOTWJMOMONdiaO3V5ng07ypTZKQuIEDVVr_sZmS9X3Vs1qop0AWr-QnAzSCYTJ16O-YjbxzY9RYZD_Dn6LLV1pzJCz-bAqPUMjkVkUdGCDBj0HSbwFPQVgzl3DLE2qMIBhKXuK50sqqeySMSnV2subuq3dIz0jseB5NoUz4fm7luHypv9naqtNMdGXjqGTVy_dGLRqvoVFBVHX5EU_iVr8yr6THBKcWNNxQBpfO8rUx-9wBiqBSx30t66OXIcEXx2iWlmmn5SHKnb2lBziNsD-EYv94HIcGj0emiCmsmQ_tvoi0Nn5BveqTdaZc8pye90W-VY1mqG0kEHW_bUpwjq1haLHfK_5r3aUN8t1mpa8B9605_KIQr33wzo_B8uWEJfGcRRyg8osVk_14ArtUKsmTuyV20BgjvhO-kPK"}`,
  {
    method: "POST",
  }
)
  .then((res) => res.json())
  .then((data) => console.log({ data }))
