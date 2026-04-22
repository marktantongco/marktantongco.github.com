const pptxgen = require('pptxgenjs');
const html2pptx = require('/home/z/my-project/skills/ppt/scripts/html2pptx');
const path = require('path');

async function main() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Mark Anthony Ng Tantongco';
  pptx.title = 'The 100% Accountability Sales Playbook';
  pptx.subject = 'Own Outcomes, Not Excuses';

  const fontConfig = { cjk: 'Microsoft YaHei', latin: 'Palatino Linotype' };

  const slideDir = '/home/z/my-project/download/ppt-slides';
  const slideFiles = [];
  for (let i = 1; i <= 12; i++) {
    slideFiles.push(path.join(slideDir, `slide${String(i).padStart(2, '0')}.html`));
  }

  const allWarnings = [];
  for (let i = 0; i < slideFiles.length; i++) {
    try {
      console.log(`Processing slide ${i + 1}/${slideFiles.length}: ${path.basename(slideFiles[i])}`);
      const { slide, placeholders, warnings } = await html2pptx(slideFiles[i], pptx, { fontConfig });
      if (warnings.length > 0) {
        console.log(`  Warnings: ${warnings.join('; ')}`);
        allWarnings.push({ slide: i + 1, warnings });
      }
    } catch (err) {
      console.error(`  ERROR on slide ${i + 1}: ${err.message}`);
    }
  }

  const outputPath = '/home/z/my-project/download/100-Accountability-Playbook.pptx';
  await pptx.writeFile({ fileName: outputPath });
  console.log(`\nDone! Saved to: ${outputPath}`);
  console.log(`Total warnings: ${allWarnings.length}`);
}

main().catch(console.error);
