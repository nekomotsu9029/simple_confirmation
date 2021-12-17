# Simple_confirmation

## How to use, Example

<script>
    simple_confirmation(
            {
                'text_title': 'You want to delete the task?',
                'text_button_yes': 'Yes',
                'text_button_no': 'No'
            },
            function(){
                console.log('this will happen if the user clicks the button "Yes"')
            },
            function(){
                console.log('this will happen if the user clicks the button "No"')
            }
        )
</script>