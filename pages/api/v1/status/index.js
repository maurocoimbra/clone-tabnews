function health(request, response) {
  response.status(200).json({ status: "ok" });
}

export default health;
