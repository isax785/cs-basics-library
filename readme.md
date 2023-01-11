# Readme

This repository is aimed at collecting some basic knowledge for computer science and programming.

It is not intended to be a complete library with the complete collection of concepts. Most of all, it is a personal library built to consolidate my knowledge and ease the comprehension of the contents here reported.

The macro-are which the topics belong to are the following ones:

- Algorithms

- Data structures

- Design Patterns

- Dynamic Programming

The programming languages that will be used for the implementation are:

- `Python`

- `C++`

- `JavaScript`



> Additional areas and programming languages could be integrated in the future.



Last but not the least, this is also a first attempt for haring a public repo to the world.

# Learning Folder Guidelines

Guidelines that ease the development of this library, together with the writing of the related documentation, notes, and tasks.

The `.md` files are the basis of the whole development. Each folder has its own `.md` file (with the same name, different naming convention) where the whole documentation is stored.

`.md` files are aimed at taking notes, keeping track of the tasks, and defining the structure of the whole project (with the aid of the internal links).

The linking system in the `.md` files is aimed at publishing the repo online and ease future consultation and info recovery.

> `VSC` is the recommended editor to manage this development.

## Folder Structure

```
MainFolder
|-- main_folder.md
|   |-- TopicA
|   |   |-- topic_a.md
|   |   |-- SrcTopicA
|   |   |   |-- ...
|   |   |   |-- ...
|   |   |-- AnalysisA
|   |   |   |-- analysis_a.md
|   |   |   |-- py
|    |   |   |   |-- an_py_analysis_a.ipynb
|    |   |   |   |-- file_name.py
|   |   |   |-- js
|   |   |   |   |-- an_js_analysis_a.ipynb
|   |   |   |-- cpp
|   |   |   |   |-- main.cpp
|    |-- TopicB
...
```

`MainFolder` : root of the project

- `main_folder.md` : global description of the whole project,
- `TopicA` : folder that is the container for Topic A content
  - `topic_a.md` : General description of Topic A, global notes, `todo`
  - `TopicAAnalysisA` : a single topic belonging to Topic A field
    - `topic_a_analysis_a` : detailed noted
    - `py` : all Python files
      - `topic_a_analysis_a.ipynb` : Jupyter notebook
      - `file_name_a.py` : some script
    - `js` : all JavaScript files
    - `cpp` : all C++ files

## `.md` Files

The `.md` file has the same name of the folder, with the naming convention related to files.

Content of each file:

- purpose of the section
- notes belonging to the section and level of folder
- `todo` concerning the level of the folder
- link to child folder `.md` file
- link to parent folder `.md` file (optional)
- link to main `.md` file (optional)

## Naming

Files and folder nomenclature:

- `PascalCase` : folders
- `snake_case` : files

## Prefixes and Suffixes

Prefixes defines the kind of activity carried out in the files. It is mainly for `.ipynb` files.

See [[gdl - taking notes#Jupyter Prefixes|Jupyter Prefixes]].

## Jupyter Notebooks

`[type]_[code]_[filename]_[rev].[extension]`

- `[type]`
  - `boh`
- `[code]`
  - `py` : Python
  - `js` : JavaScript
  - `mo` : Modelica

## Links

Links are `html` style for publishing purposes.

Snippet:

```html
<a href="path_here"> Learn Playing </a>
```

## Source Folders

Source folders containing the files for the project development are contained in the parent folder of all the sub-folders that use them.

`src` and `obj` folders.
