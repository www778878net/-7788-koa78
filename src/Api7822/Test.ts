export default class Test {
    constructor() {
         
    }

    testfun() {
        return 3;
    }

    //ͨ����� Ϊ�˽ػ���� ��������־
    out(method: string): Promise<any> {
        const self = this;

        return new Promise(async (resolve, reject) => {
            if (typeof self[method] !== 'function') {
                resolve('apifun not find');
                return;
            }
            let back: any;  

            try {
                back = await self[method]();
                //����ת�ı� ����ת�ı�       
            } catch (e) {
                //�����¼����
                console.log("doing err log3" + e);
                back = e; 
            };

            try {
                if (!isNaN(back)) back = back.toString();  
              
                back = "{\"res\":" + "0" + ",\"errmsg\":\""
                    + "" + "\",\"kind\":\"" + "test" + "\",\"back\":"
                    + back + "}"  
                resolve(back);  
 

            } catch (e) {
                e = JSON.stringify(e); 
                reject(e);
            }
        }).catch(function (e) {
            //�����¼���� ������ò�Ҫreject ͨ��res<0����
            console.log("doing err log2" + e);

        });
    }
}