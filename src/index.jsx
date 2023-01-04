import React, { useEffect, useRef, useState } from "react";
import arrow from "./angle-arrow-down.png";
import PropTypes from "prop-types";

function SelectItem({ arrayProps, selectImg, selectClass }) {
  const [option, setOption] = useState("");
  const [selected, setSelected] = useState(false);

  const toggleArrow = () => {
    const arrow = document.querySelector(
      `.selectItem__${selectClass}__field--img`
    );
    arrow.classList.toggle("rotate");
  };

  const toggleList = () => {
    const list = document.querySelector(`.selectItem__${selectClass}__list`);
    list.classList.toggle("hide");
    toggleArrow();
  };

  const refOutside = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!refOutside.current.contains(event.target)) {
        const list = document.querySelector(`selectItem__${selectClass}__list`);
        list.classList.add("hide");
        const arrow = document.querySelector(
          `.selectItem__${selectClass}__field--img`
        );
        arrow.classList.remove("rotate");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });
  return (
    <div className="selectItem" ref={refOutside}>
      <div
        id="selectField"
        className={`selectItem__${selectClass}__field`}
        onClick={() => {
          toggleList();
        }}
      >
        <p id={`${selectClass}`}>
          {selected === false ? `Select your ${selectClass}` : option}
        </p>
        <img
          className={`selectItem__${selectClass}__field--img`}
          src={selectImg}
          alt="Fleche ouverture du select"
        />
      </div>
      <ul className={`selectItem__${selectClass}__list hide`}>
        {arrayProps.map((unit) => (
          <li
            className={`selectItem__${selectClass}__list--option`}
            onClick={() => {
              setOption(unit.name);
              setSelected(true);
              toggleList();
            }}
            key={unit.abbreviation}
          >
            <p>{unit.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

SelectItem.propTypes = {
  arrayProps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      abbreviation: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectImg: PropTypes.string.isRequired,
  selectClass: PropTypes.string.isRequired,
};

export { SelectItem };
