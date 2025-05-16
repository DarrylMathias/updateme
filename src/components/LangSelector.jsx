import { NativeSelect } from "@chakra-ui/react";

const languageOptions = [
  { lang: "Arabic", value: "ar" },
  { lang: "Chinese", value: "zh" },
  { lang: "Dutch", value: "nl" },
  { lang: "English", value: "en" },
  { lang: "French", value: "fr" },
  { lang: "German", value: "de" },
  { lang: "Greek", value: "el" },
  { lang: "Hebrew", value: "he" },
  { lang: "Hindi", value: "hi" },
  { lang: "Italian", value: "it" },
  { lang: "Japanese", value: "ja" },
  { lang: "Malayalam", value: "ml" },
  { lang: "Marathi", value: "mr" },
  { lang: "Norwegian", value: "no" },
  { lang: "Portuguese", value: "pt" },
  { lang: "Romanian", value: "ro" },
  { lang: "Russian", value: "ru" },
  { lang: "Spanish", value: "es" },
  { lang: "Swedish", value: "sv" },
  { lang: "Tamil", value: "ta" },
  { lang: "Telugu", value: "te" },
  { lang: "Ukrainian", value: "uk" },
];

function LangSelector({onLangChange}) {
  return (
    <NativeSelect.Root size="sm" width="240px">
      <NativeSelect.Field
        placeholder="Select language"
        onChange={(event) => onLangChange(event.target.value)}
      >
        {languageOptions.map((language) => {
          return <option value={language.value} key = {language.value}>{language.lang}</option>;
        })}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
}

export default LangSelector;
