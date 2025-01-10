// create ChatResponse const and return response
const ChatResponse = ({response}) => {
    if(!response){
      return null;
    }

    const {candidates, usageMetaData} = response;

  return (
    <div className="container my-4">
        <h3>Response</h3>
        {candidates.map((candidate, index) => (
            <div key={index} className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">Candidate{index + 1}</h5>
                    <p className="card-text">{candidate.content.parts[0].text}</p>
                    <h6>Citations:</h6>
                    <ul>
                        {candidate?.citationMetadata?.citationSources.map((source, idx) => (
                            <li key={idx}>
                                <a href={source.url} target="_blank" rel="noreferrer">
                                    {source.title}
                                </a> {""}
                                (Indexes: {source.startIndex} - {source.endIndex})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}

        {/* <h4>Usage MetaData</h4>
        <p>Prompt Tokens: {usageMetaData.promptTokenCount}</p>
        <p>Candidates Tokens: {usageMetaData.candidatesTokenCount}</p>
        <p>Total Tokens: {usageMetaData.totalTokenCount}</p> */}

    </div>
  );
}

export default ChatResponse;