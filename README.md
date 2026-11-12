# D365fO Task Recorder Screenshot Extension
A lightweight browser extension for **Dynamics 365 for Finance and Operations** that enables seamless screenshot capture for task recorder documentation.

[![Edge Add-ons](https://img.shields.io/badge/Microsoft%20Edge-Available-0078D4?style=flat-square&logo=microsoft-edge)](https://microsoftedge.microsoft.com/addons/detail/d365fo-task-recorder-scre/jicnhognejpfbfpfpacjipoknfljdcec)
![Manifest Version](https://img.shields.io/badge/Manifest-V3-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## About
This extension is a packaged version of the screenshot functionality from the [Microsoft FMLab repository](https://github.com/Microsoft/FMLab), as described in the [official D365 Task Recorder documentation](https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/task-recorder#taking-screenshots-in-task-recorder).

When you capture a screenshot in D365fO's task recorder, this extension automatically **removes the task recorder pane** from the screenshot, giving you clean, focused images for your documentation.

## Installation

### From Microsoft Edge Add-ons Store
Visit the [D365fO Task Recorder Screenshot extension page](https://microsoftedge.microsoft.com/addons/detail/d365fo-task-recorder-scre/jicnhognejpfbfpfpacjipoknfljdcec) and click **Get**.

### Manual Installation (Development)
1. Clone this repository:
   ```bash
   git clone https://github.com/rowdynl/d365fo-task-recorder-screenshot-extension.git
   cd d365fo-task-recorder-screenshot-extension
   ```
2. In Microsoft Edge, navigate to `edge://extensions/`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked**
5. Select the extension directory

## Usage
1. **Open Task Recorder** in your D365fO environment
2. **Start recording** your business process
3. **When you need a screenshot**, the task recorder will automatically use this extension
4. **The screenshot pane** will open—the extension automatically crops out the task recorder sidebar
5. **Continue your documentation** with clean, focused screenshots

## Permissions
The extension requests the following permissions:

- **tabs** - Required to capture visible tabs
- **Host permissions** for `https://*.dynamics.com/*` - Enables screenshot functionality on D365fO instances

## License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Credits
- **Original Code**: [Microsoft FMLab](https://github.com/Microsoft/FMLab)
- **Icons**: Made by [phatplus](https://www.flaticon.com/authors/phatplus) from [Flaticon](https://www.flaticon.com)
- **Packaged by**: [Rowdy Schwachöfer](https://rowdy.nl)

## Resources
- **Documentation**: [D365fO Task Recorder Screenshot Extension](https://rowdy.nl/extension/d365fo-task-recorder-screenshot/)
- **Edge Store**: [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/d365fo-task-recorder-scre/jicnhognejpfbfpfpacjipoknfljdcec)
- **D365 Docs**: [Task Recorder - Screenshots](https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/task-recorder#taking-screenshots-in-task-recorder)
- **Original Source**: [Microsoft FMLab](https://github.com/Microsoft/FMLab)

## Issues & Contributions
Found a bug or have a feature request? Please open an [issue on GitHub](https://github.com/rowdynl/d365fo-task-recorder-screenshot-extension/issues).

Contributions are welcome! Feel free to submit pull requests with improvements.

## Support
For questions or support, visit [rowdy.nl](https://rowdy.nl) or check the [extension page](https://rowdy.nl/extension/d365fo-task-recorder-screenshot/).