function goToHtml(string, isDeleteStorage = false, link = null) {
    document.location.href = string
    if (isDeleteStorage) {
        navigate(link)
    }
}