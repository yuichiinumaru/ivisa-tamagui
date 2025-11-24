# how to write a gemini-cli slash command and execute via cli directly (without running the interface, like gemini -y -p "do this and that") that run tests and deliver detailed report? for example
"pnpm vitest run tests/providers.spec.tsx"  
  
# Answer (Grok-4):  
### Creating Custom Slash Commands in Gemini CLI

Custom slash commands in Gemini CLI are defined using TOML files that specify prompts, descriptions, and shell command integrations. These commands allow you to encapsulate complex workflows, such as running tests and generating reports, by injecting shell outputs into AI prompts for analysis. Place the TOML files in `~/.gemini/commands/` for global use or `.<project>/.gemini/commands/` for project-specific commands, with the filename determining the command name (e.g., `test.toml` becomes `/test`).[1][2][3]

To create a command, structure the TOML file with a `description` and `prompt` key. The `prompt` can include `!{shell_command}` syntax to execute shell commands and inject their output directly into the prompt sent to Gemini. For example, to run Vitest and deliver a detailed report, define a command that executes the test command and instructs Gemini to analyze the output.[4][5][6]

### Example: Command for Running Tests and Generating Reports

Create a file named `~/.gemini/commands/test.toml` with the following content:

```
description = "Runs Vitest on providers.spec.tsx and generates a detailed report."

prompt = """
Run the following test command and analyze the output to provide a detailed report, including pass/fail counts, execution time, error details, coverage summary, and recommendations for fixes if any tests fail.

Command output:
```
!{pnpm vitest run tests/providers.spec.tsx --reporter=json}
```

Please format the report with sections: Overview, Failed Tests (if any), Coverage, and Next Steps.
"""
```

This setup uses `!{...}` to run the shell command, capturing its output (stderr and stdout) and injecting it into the prompt. Gemini then processes this output to generate a structured report. The `--reporter=json` flag makes the output parseable for better analysis, but you can adjust it based on your needs.[5][6][7]

### Executing the Command via CLI Directly (Non-Interactive Mode)

Gemini CLI supports non-interactive mode using the `-p` or `--prompt` flag, allowing direct execution without launching the full interface. However, custom slash commands like `/test` require the interactive mode for full recognition and execution, as non-interactive mode may not resolve them from TOML files. To run the command directly, launch Gemini CLI interactively with `-y` (to auto-confirm any shell executions) and immediately invoke the slash command, or use a wrapper script for automation.[8][9][10]

- **Interactive Invocation with Auto-Confirm:** Run `gemini -y -p "/test"`. The `-y` flag skips confirmation prompts for shell commands (e.g., the `!{pnpm ...}` execution), and `-p` provides the initial prompt to trigger the command. Gemini will execute the test, inject the output, and output the report to the terminal before exiting if no further input is needed.[6][9][11]
  
- **For More Complex Automation:** If you need purely non-interactive behavior without the interface, pipe the slash command via stdin: `echo "/test" | gemini -y`. This works for simple cases but may require testing, as slash command resolution can vary in piped mode. For reliability with reports, use the interactive flag and redirect output: `gemini -y -p "/test" > test-report.txt`.[12][13][14]

### Enhancing the Report and Testing

To refine the report, modify the `prompt` in the TOML file to include specific instructions, such as parsing JSON output for metrics or suggesting code fixes based on errors. Test the command interactively first by running `gemini` and typing `/test` to verify shell execution and output injection. Security features will prompt for confirmation on shell runs unless `-y` is used, and errors from the command (e.g., Vitest failures) are included in the injected output for comprehensive analysis.[2][6]

For project-specific tests, use subdirectories like `.gemini/commands/ci/test.toml` to create `/ci:test`. This approach integrates seamlessly with your pnpm/Vitest setup, enabling quick CLI-based testing workflows without manual scripting.[3][5]  
  
# Citations:  
[1] [Gemini CLI: Custom slash commands | Google Cloud Blog](https://cloud.google.com/blog/topics/developers-practitioners/gemini-cli-custom-slash-commands)  
[2] [Gemini CLI supports custom slash commands for GitHub and MCP](https://www.linkedin.com/posts/jack-wotherspoon_gemini-cli-custom-slash-commands-google-activity-7356359580181782528-hPTr)  
[3] [Custom Commands | gemini-cli - GitHub Pages](https://google-gemini.github.io/gemini-cli/docs/cli/custom-commands.html)  
[4] [Gemini CLI: Custom Commands Are So Cool - DEV Community](https://dev.to/gioboa/gemini-cli-custom-commands-are-so-cool-1nma)  
[5] [Gemini CLI Custom Slash Commands - AI Engineer Guide](https://aiengineerguide.com/blog/gemini-cli-custom-slash-commands/)  
[6] [Custom Commands - Gemini CLI](https://geminicli.com/docs/cli/custom-commands/)  
[7] [How do I use Gemini CLI for shell command generation?](https://milvus.io/ai-quick-reference/how-do-i-use-gemini-cli-for-shell-command-generation)  
[8] [Hands-on with Gemini CLI - Google Codelabs](https://codelabs.developers.google.com/gemini-cli-hands-on)  
[9] [How do I run a Gemini CLI command from the terminal? - Milvus](https://milvus.io/ai-quick-reference/how-do-i-run-a-gemini-cli-command-from-the-terminal)  
[10] [Commands Should work in Non-Interactive Mode #5435 - GitHub](https://github.com/google-gemini/gemini-cli/issues/5435)  
[11] [Google Gemini CLI Cheatsheet - Philschmid](https://www.philschmid.de/gemini-cli-cheatsheet)  
[12] [Gemini CLI Docs](https://gemini-cli.xyz/docs/en/cli)  
[13] [Gemini CLI: Boost Productivity Without Sacrificing Privacy](https://www.hackerstack.org/gemini-cli-boost-productivity-without-sacrificing-privacy/)  
[14] [Add @file command support for non-interactive cli input · Issue #3311](https://github.com/google-gemini/gemini-cli/issues/3311)  
[15] [I Built 10+ Gemini CLI Commands to Automate My Daily Workflow ...](https://www.reddit.com/r/Bard/comments/1meghqn/i_built_10_gemini_cli_commands_to_automate_my/)  
[16] [Support user-defined custom slash commands · Issue #2727 - GitHub](https://github.com/google-gemini/gemini-cli/issues/2727)  
[17] [google-gemini/gemini-cli: An open-source AI agent that ... - GitHub](https://github.com/google-gemini/gemini-cli)  
[18] [Shell Tool (run_shell_command) | AI Coding Tools Docs](https://aicodingtools.blog/en/gemini-cli/tools/shell)  
[19] [Turn Gemini CLI into a Server with Custom Slash Commands](https://www.youtube.com/watch?v=2Dof15zWBWM)  
[20] [Google announces Gemini CLI: your open-source AI agent](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)  
[21] [Now open for building: Introducing Gemini CLI extensions](https://blog.google/technology/developers/gemini-cli-extensions/)  
[22] [/run command to directly execute shell ...](https://github.com/google-gemini/gemini-cli/issues/4303)  
[23] [Gemini CLI Custom Slash Commands - DEV Community](https://dev.to/ranand12/gemini-cli-custom-slash-commands-42ja)  
[24] [Gemini CLI: A Guide With Practical Examples - DataCamp](https://www.datacamp.com/tutorial/gemini-cli)  
[25] [How I Turned Gemini CLI into a Multi-Agent System with Just Prompts](https://aipositive.substack.com/p/how-i-turned-gemini-cli-into-a-multi)  
[26] [Say hello to a new level of interactivity in Gemini CLI](https://developers.googleblog.com/en/say-hello-to-a-new-level-of-interactivity-in-gemini-cli/)  
[27] [Gemini CLI is awesome! But only when you make Claude Code use ...](https://www.reddit.com/r/ChatGPTCoding/comments/1lm3fxq/gemini_cli_is_awesome_but_only_when_you_make/)  
[28] [Gemini-CLI Interactive Shell is a game changer for network engineers](https://www.youtube.com/watch?v=jTPVV06ncTk)  
[29] [Gemini CLI](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-cli)