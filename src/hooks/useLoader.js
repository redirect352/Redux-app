import { useEffect, useState } from 'react';

const loadStates = {loading : 'loading', successed : 'successed', erorred : 'errored'};

const useLoader = (loadFunction, onLoaded = ()=>{}) =>{
	const [content, updateContent] = useState([]);
	const [loadState, changeLoadState] = useState(loadStates.loading); 
	const [error, setError] = useState(null);

	const onContentLoaded = (loadedCharacters) => {
		updateContent(loadedCharacters);
		onLoaded(loadedCharacters);
		changeLoadState(loadStates.successed);
	};
	const onError = (error) => {
		console.error(error);
		setError(error.message);
		changeLoadState(loadStates.erorred);
	}
	const reload =() =>{
		changeLoadState(loadStates.loading)
	}
	useEffect(()=>{
		if(loadFunction && loadState===loadStates.loading){
			loadFunction()
				.then(onContentLoaded)
				.catch(onError);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loadFunction, loadState]);

	return {error, loadState, content, reload};
}

export {loadStates};
export default useLoader;