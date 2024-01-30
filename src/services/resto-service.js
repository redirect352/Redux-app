import httpClient from "./httpClient";

export default class RestoService {
	async getResourse(url, config){
		const res =  await httpClient.get(url, config);
		if(res.status > 200){
			throw new Error(res.response ?? res.request ?? 'Error', res.message)
		}else{
			return res.data;
		}
	}

	getMenuItems (){
		return this.getResourse('/menu');
	}
}