module.exports = function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(function (sU, sI, sAR) {
			return goodUsers.some(function (gU, gI, gAR) {
				if (gU.id == sU.id) {
					return true;
				}
			})
		})
	};
}
