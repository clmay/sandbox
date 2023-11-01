# a script to rename all the files in the course folders with the section name, and move them up a level
# after this, search and replace all the file names in the index.html to fix the links

find "$1"/* -type d | while read -r folder; do
    if [[ -f "$folder/index.html" ]]; then
        mv "$folder/index.html" "$1/$(basename $folder).html"
        rm -r "$folder"
    fi
done
