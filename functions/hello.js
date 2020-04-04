// netlify functions expects a "handler" export
exports.handler = async (event) => {
  // convention: queryStringParameters exists on event
  const subject = event.queryStringParameters.name || "World";

  // convention: return statusCode + body
  return {
    statusCode: 200,
    body: `Hello, ${subject}`,
  };
};
