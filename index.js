import { SlashCommand } from '../../../slash-commands/SlashCommand.js';
import { ARGUMENT_TYPE, SlashCommandNamedArgument } from '../../../slash-commands/SlashCommandArgument.js';
import { SlashCommandParser } from '../../../slash-commands/SlashCommandParser.js';

/**
 * Command callback for triggering the "ring" command.
 * @param {object} args Command arguments
 * @returns {string} Command output
 */
function commandCallback(args) {
    const inputField = document.querySelector('#send_textarea');
        if (inputField) {
            inputField.value = '/sys compat=true /ring ' + (args.name || 'Someone') + "'s phone is ringing";
            document.querySelector('#send_textarea').focus();
            const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
            inputField.dispatchEvent(event);
}

jQuery(() => {
    SlashCommandParser.addCommandObject(SlashCommand.fromProps({
        name: 'ring',
        callback: commandCallback,
        helpString: 'Trigger a command to indicate someone\'s phone is ringing.',
        returns: 'A string indicating the phone is ringing.',
        namedArgumentList: [
            SlashCommandNamedArgument.fromProps({
                name: 'name',
                typeList: [ARGUMENT_TYPE.STRING],
                defaultValue: 'Someone',
                isRequired: false,
                acceptsMultiple: false,
                description: 'Name of the person whose phone is ringing',
            }),
        ],
    }));
});