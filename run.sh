inotifywait -m sounds -e create -e moved_to |
    while read path action file; do
        echo "The file '$file' appeared in directory '$path' via '$action'"
	aplay sounds/$file
    done



// cmd &
// cmd2 &
// wait
