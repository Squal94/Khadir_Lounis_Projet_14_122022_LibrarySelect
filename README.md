# Khadir_Lounis_Projet_14_122022_LibrarySelect

Create components, select in external library for project Wealth Health.

## Folder Structure

After creation, your project should look like this:

```
my-app/

    dist/
    index.js

    node_modules/

    src/
        index.jsx

    README.md
    package.json
    webpack.config.js

```

## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

### for this librairy SelectItem

```
npm install @squal94/librairyselectprojet14

```

## Adding a Stylesheet

This project uses [Webpack] (https:/webpack.githubio/) to manage all assets. Webpack offers a personalized way to “extend” the concept of “import” beyond Javascript. To express that a JavaScript file depends on a CSS file, you must **import the CSS or SCSS from the reaction **:

For our custom component I decided not to create an integrated style, but rather to generate the style from the project where the library has been importing, which allows to shape it according to our use

To do this I join class react to use:

### `Scss a use BEM style`

selectClass was defined in props entrie

```Scss
<div className="selectItem">
      <div
        id="selectField"
        className={`selectItem__${selectClass}__field`}
      >
        <p id={`${selectClass}`}>
        "placeholder"
        </p>
        <img
          className={`selectItem__${selectClass}__field--img`}
        />
      </div>
      <ul className={`selectItem__${selectClass}__list hide`}>
          <li
            className={`selectItem__${selectClass}__list--option`}
          >
            <p></p>
          </li>
      </ul>
    </div>
```
