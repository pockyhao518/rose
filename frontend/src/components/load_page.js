import React from 'react';

export default class LoadPage extends React.Component {
    render() {
        return (
            <div>
                <p>Click on the "Choose File" button to upload a file:</p>

                <form action="/action_page.php">
                    <input type="file" id="myFile" name="filename"></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}