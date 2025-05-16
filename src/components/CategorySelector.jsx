import { NativeSelect } from "@chakra-ui/react";

function CategorySelector({ onCategoryChange }) {
  return (
    <NativeSelect.Root size="sm" width="240px">
      <NativeSelect.Field
        placeholder="Select category"
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option value="general">General</option>
        <option value="world">World</option>
        <option value="nation">Nation</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
        <option value="sports">Sports</option>
        <option value="science">Science</option>
        <option value="health">Health</option>
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
}

export default CategorySelector;
