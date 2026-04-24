// Put your announceMachines function here! ✨
// See ./original.js for its older JavaScript code.
function announceMachines(announce, ...machines) {
	let labelsCount = 0;

	for (const m in machines) {
		let label;

		if (m.label) {
			label = m.label;
			labelsCount++;
		} else {
			label = `Male: ${m.make}; Model: ${m.model}`;
		}
		announce(label);
	}

	return labelsCount;
}

module.exports.announceMachines = announceMachines;
