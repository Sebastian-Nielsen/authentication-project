
const removeAt = (index, array) => {
	var array_copy = [...array]
	array_copy.splice(index, 1)
	return array_copy
}

export default removeAt;