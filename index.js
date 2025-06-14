import { SlashCommand } from '../../../slash-commands/SlashCommand.js';

// Usage: /ring Skye
// Output: /sys compat=true Skye's phone is ringing

export default new SlashCommand({
    name: "ring",
    description: "Trigger a custom ring command: /sys compat=true <name>'s phone is ringing",
    args: [
        {
            name: "target",
            description: "Name of the person whose phone is ringing",
            type: "string",
            required: true
        }
    ],
    execute({ args, send }) {
        let target = args.target ? String(args.target).trim() : "";
        if (!target) {
            send("You must specify whose phone is ringing.");
            return;
        }
        const output = `/sys compat=true ${target}'s phone is ringing`;
        send(output);
    }
});