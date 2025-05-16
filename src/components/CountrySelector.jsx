import { NativeSelect } from "@chakra-ui/react";

const countryOptions = [
  { country: "Australia", value: "au" },
  { country: "Brazil", value: "br" },
  { country: "Canada", value: "ca" },
  { country: "China", value: "cn" },
  { country: "Egypt", value: "eg" },
  { country: "France", value: "fr" },
  { country: "Germany", value: "de" },
  { country: "Greece", value: "gr" },
  { country: "Hong Kong", value: "hk" },
  { country: "India", value: "in" },
  { country: "Ireland", value: "ie" },
  { country: "Israel", value: "il" },
  { country: "Italy", value: "it" },
  { country: "Japan", value: "jp" },
  { country: "Netherlands", value: "nl" },
  { country: "Norway", value: "no" },
  { country: "Pakistan", value: "pk" },
  { country: "Peru", value: "pe" },
  { country: "Philippines", value: "ph" },
  { country: "Portugal", value: "pt" },
  { country: "Romania", value: "ro" },
  { country: "Russian Federation", value: "ru" },
  { country: "Singapore", value: "sg" },
  { country: "Spain", value: "es" },
  { country: "Sweden", value: "se" },
  { country: "Switzerland", value: "ch" },
  { country: "Taiwan", value: "tw" },
  { country: "Ukraine", value: "ua" },
  { country: "United Kingdom", value: "gb" },
  { country: "United States", value: "us" },
];

function CountrySelector({ onCountryChange }) {
  return (
    <NativeSelect.Root size="sm" width="240px">
      <NativeSelect.Field
        placeholder="Select country"
        onChange={(event) => onCountryChange(event.target.value)}
      >
        {countryOptions.map((country) => {
          return <option value={country.value} key = {country.value}>{country.country}</option>;
        })}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
}

export default CountrySelector;
