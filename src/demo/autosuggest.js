/*

https://phuoc.ng/collection/mirror-a-text-area/mention/


    <input type="text" id="field" />
    <div id="suggestions" style="cursor: pointer;"></div>

    
Builds up an array with global variable names, like
'alert', 'document', and 'scrollTo'
let terms = [];
for (let name in window) terms.push(name);

const textfield = document.querySelector("#field");
const suggestions = document.querySelector("#suggestions");

textfield.addEventListener("input", function () {
  const matching = terms.filter(function (term) {
    return term.indexOf(textfield.value) == 0;
  });
  suggestions.textContent = "";
  matching.slice(0, 30).forEach(function (term) {
    const node = document.createElement("div");
    node.textContent = term;
    node.addEventListener("click", function () {
      textfield.value = term;
      suggestions.textContent = "";
    });
    suggestions.appendChild(node);
  });
});

*/

/*

 <div class="container" id="container">
      <input
        id="input"
        class="container__input"
        type="text"
        autocapitalize="off"
        autocomplete="off"
        autocorrect="off"
        spellcheck="false"
      />
    </div>


const suggestions = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

const containerEle = document.getElementById("container");
const inputEle = document.getElementById("input");

const mirroredEle = document.createElement("div");
mirroredEle.textContent = inputEle.value;
mirroredEle.classList.add("container__mirror");
containerEle.prepend(mirroredEle);

const inputStyles = window.getComputedStyle(inputEle);
[
  "border",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "padding",
  "textDecoration",
  "textIndent",
  "textTransform",
  "whiteSpace",
  "wordSpacing",
  "wordWrap"
].forEach((property) => {
  mirroredEle.style[property] = inputStyles[property];
});
mirroredEle.style.borderColor = "transparent";

const parseValue = (v) => (v.endsWith("px") ? parseInt(v.slice(0, -2), 10) : 0);
const borderWidth = parseValue(inputStyles.borderWidth);

const ro = new ResizeObserver(() => {
  mirroredEle.style.width = `${inputEle.clientWidth + 2 * borderWidth}px`;
  mirroredEle.style.height = `${inputEle.clientHeight + 2 * borderWidth}px`;
});
ro.observe(inputEle);

const findIndexOfCurrentWord = () => {
  // Get current value and cursor position
  const currentValue = inputEle.value;
  const cursorPos = inputEle.selectionStart;

  // Iterate backwards through characters until we find a space or newline character
  let startIndex = cursorPos - 1;
  while (startIndex >= 0 && !/\s/.test(currentValue[startIndex])) {
    startIndex--;
  }
  return startIndex;
};

// Replace current word with selected suggestion
const replaceCurrentWord = (newWord) => {
  const currentValue = inputEle.value;
  const cursorPos = inputEle.selectionStart;
  const startIndex = findIndexOfCurrentWord();

  const newValue =
    currentValue.substring(0, startIndex + 1) +
    newWord +
    currentValue.substring(cursorPos);
  inputEle.value = newValue;
  inputEle.focus();
  inputEle.selectionStart = inputEle.selectionEnd =
    startIndex + 1 + newWord.length;
};

const hideSuggestion = () => {
  mirroredEle.innerHTML = "";
};

let matches = [];
let currentMatchIndex = 0;

const previewSuggestion = () => {
  if (matches.length === 0) {
    hideSuggestion();
    return;
  }

  const currentValue = inputEle.value;
  const cursorPos = inputEle.selectionStart;
  const textBeforeCursor = currentValue.substring(0, cursorPos);

  const preCursorEle = document.createElement("span");
  preCursorEle.textContent = textBeforeCursor;
  preCursorEle.classList.add("container__pre-cursor");

  const postCursorEle = document.createElement("span");
  postCursorEle.classList.add("container__post-cursor");
  postCursorEle.textContent = matches[currentMatchIndex];

  const caretEle = document.createElement("span");
  caretEle.innerHTML = "&nbsp;";

  mirroredEle.innerHTML = "";
  mirroredEle.append(preCursorEle, caretEle, postCursorEle);
};

inputEle.addEventListener("input", () => {
  const currentValue = inputEle.value;
  const cursorPos = inputEle.selectionStart;
  if (cursorPos !== currentValue.length) {
    hideSuggestion();
    return;
  }

  const startIndex = findIndexOfCurrentWord();

  // Extract just the current word
  const currentWord = currentValue.substring(startIndex + 1, cursorPos);
  if (currentWord === "") {
    hideSuggestion();
    return;
  }

  matches = suggestions.filter(
    (suggestion) =>
      suggestion.toLowerCase().indexOf(currentWord.toLowerCase()) > -1
  );
  currentMatchIndex = 0;
  previewSuggestion();
});

inputEle.addEventListener("keydown", (e) => {
  const currentValue = inputEle.value;
  const cursorPos = inputEle.selectionStart;
  if (cursorPos !== currentValue.length) {
    return;
  }

  switch (e.key) {
    case "ArrowDown":
      if (matches.length > 0 && currentMatchIndex < matches.length - 1) {
        e.preventDefault();
        currentMatchIndex++;
        previewSuggestion();
      }
      break;
    case "ArrowUp":
      if (matches.length > 0 && currentMatchIndex >= 1) {
        e.preventDefault();
        currentMatchIndex--;
        previewSuggestion();
      }
      break;
    case "Tab":
      const postCursorEle = mirroredEle.querySelector(
        ".container__post-cursor"
      );
      if (postCursorEle.textContent !== "") {
        e.preventDefault();
        replaceCurrentWord(postCursorEle.textContent);
        hideSuggestion();
      }
      break;
    default:
      break;
  }
});

*/
