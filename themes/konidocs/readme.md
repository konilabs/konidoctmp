# Hugo konidocs theme manual

## Partials

### Tools

This folder contains utilities that help themes development.

#### tools/init.html

This partial must be included first.  
It will initalize following Scratch variables :
- theme-name
- theme-shortcodes

#### tools/shortcode-include.html

This partial include headers and footer resources for each shortcode used in current page.
Resource code shall be located in following folder :
/layout/partial/shortcode-resources/<shortcodename>/header.html
/layout/partial/shortcode-resources/<shortcodename>/footer.html

#### tools/resource-load.html

Loads a CSS or JS resource. Partial will minify and/or fingerprint the resource depending on configuration

## Scratch Variables

### theme-name

Defines current themename

### theme-shortcodes

This slice list all available theme shortcodes.

## Parameters

### env

Defines current build configuration

### res-minify

List of build configurations for which resources will be minified.

### res-fingerprint

List of build configurations for which resource fingerprint will be calculated.

### res-hash

Resource hash function. Can be equal to `sha256`, `sha384`, `sha512` or `md5`

## Coding conventions

If partial needs multiple variables, `Page` is always used to provide the `.` context  
Scratch variable with `theme-` are reserved for this theme

