import { ChangeEvent, FC, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import Input from "../../ui/Input";

import styles from "./EmailPage.module.css";

const EmailPage: FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  return (
    <>
      <div>
        <h2>{t("after_quiz.email")}</h2>
        <p>{t("after_quiz.email_comment")}</p>
      </div>
      <Input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder={t("after_quiz.your_email")}
        valid={valid}
      />
      <Trans>
        <p></p>
      </Trans>
      <button disabled={!valid}>{t("after_quiz.next")}</button>
    </>
  );
};

export default EmailPage;
