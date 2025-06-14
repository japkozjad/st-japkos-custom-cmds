import { SlashCommand } from '../../../slash-commands/SlashCommand.js';
import { ARGUMENT_TYPE, SlashCommandNamedArgument } from '../../../slash-commands/SlashCommandArgument.js';
import { SlashCommandParser } from '../../../slash-commands/SlashCommandParser.js';

SlashCommandParser.addCommandObject(SlashCommand.fromProps({
    name: 'ring',
    callback: (namedArgs, unnamedArgs) => {
        if (!unnamedArgs || unnamedArgs.length === 0) {
            return 'Error: Please provide a name.';
        }

        const name = unnamedArgs.toString();
        const message = `/sys compat=true ${name}'s phone is ringing`;

        // Simulate input into the #send_textarea field and trigger the command
        const inputField = document.querySelector('#send_textarea');
        if (inputField) {
            inputField.value = message;
            inputField.focus();
            const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
            inputField.dispatchEvent(event);
        }

        return ''; // Return an empty string to avoid additional output
    },
    aliases: [],
    returns: 'Triggers a message indicating the phone is ringing',
    unnamedArgumentList: [
        SlashCommandArgument.fromProps({
            description: 'The name of the person whose phone is ringing',
            typeList: ARGUMENT_TYPE.STRING,
            isRequired: true,
        }),
    ],
    helpString: `
        <div>
            Triggers a message indicating someone's phone is ringing.
        </div>
        <div>
            <strong>Example:</strong>
            <ul>
                <li>
                    <pre><code class="language-stscript">/ring Skye</code></pre>
                    triggers "/sys compat=true Skye's phone is ringing"
                </li>
            </ul>
        </div>
    `,
}));

