/*import { Component } from "react";

// MD5 算法模块
import crypto from "crypto";

// 如何计算 MD5
function md5(data) {
    let Buffer = require("buffer").Buffer;
    let buf = new Buffer(data);
    let str = buf.toString("binary");
    return "md5_" + crypto.createHash("md5").update(str).digest("hex");
}

class CataContent extends Component{
  constructor(){
    super();//执行Component构造器方法
    //默认值
    this.state = {}
  }
  //声明周期，当 dom 元素插入到页面后触发
//componentDidMount(){
//  let { location } = this.props;
//  //console.log('..',this.props);
//  let { query } =  location;
//    console.log(1,query);
//  const that = this;
//  $.get("/cata/content",query,function(res){
//      console.log(3,res);
//    if(res.reason == "Success"){
//      that.setState({
//        "list" : res.result.data
//      });
//    }
//  },"json")
//}
//获取数据
	getData(key){
		let { location } = this.props;
		//获取的地址栏中传入过来的参数
		let { query } = location;
		const that = this;
		let random = parseInt(Math.random() * 10000);

		$.get("/cata/content", query ,function(result){
			let data = {};
			data[key] = result.result.data
			that.setState(data);

//			var obj = {};
//			obj["248"] = result.result.data;
//			that.setState(obj)
		},"json");
	}
	render(){
		let { location } = this.props;
		//获取的地址栏中传入过来的参数
		let { id } = location.query; // 地址上的 id 值
		let key = md5(id); //把 id 加密，md5 加密
		let list = this.state[key] || []; //根据加密有得到的 id 去获取数据
		if(list.length < 1){
			//通过 ajax 获取数据
			this.getData(key);
		}
		let html = (<ul>
			{
				list.map((item,i)=>{
					let li = (<li key={ `content-${i}` }>
						<img src={ item.img }/>
						<p>{ item.catalog }</p>
						<p>{ item.bytime }</p>
					</li>);
					return li;
				})
			}
		</ul>);
		return html;
	}
//render(){
//	let { location } = this.props;
//	let key = md5(id); // 把 id 加密    md5 加密
//  let html = (
//    <ul>
//      {
//        this.state.list.map((item,i)=>{
//          return(
//            <li key={ `content-${i}` }>
//              <img src={ item.img } />
//              <p>{ item.catalog }</p>
//              <p>{ item.bytime }</p>
//            </li>
//          );
//        })
//      }
//    </ul>
//  )
//  console.log(2,html)
//  return html;
//}
}

export { CataContent };*/



import { Component } from "react";

// MD5 算法模块
import crypto from "crypto";

//如何计算 md5
function md5(data) {
    let Buffer = require("buffer").Buffer;
    let buf = new Buffer(data);
    let str = buf.toString("binary");
    return "md5_" + crypto.createHash("md5").update(str).digest("hex");
}

window.md5123 = md5;

class CataContent extends Component{
	constructor(){
		super(); //执行 Component 构造器方法
		//默认值
		this.state = {
//			"248" : [],
//			"249" : [],
//			"250" : []
		};
//		var id = 248;
//		var data = this.state[id]
	}
	//获取数据
	getData(key){
		let { location } = this.props;
		//获取的地址栏中传入过来的参数
		let { query } = location;
		const that = this;
		let random = parseInt(Math.random() * 10000);

		$.get("/cata/content", query ,function(result){
			let data = {};
			data[key] = result.result.data
			that.setState(data);

//			var obj = {};
//			obj["248"] = result.result.data;
//			that.setState(obj)
		},"json");
	}
	render(){
		let { location } = this.props;
		//获取的地址栏中传入过来的参数
		let { id } = location.query; // 地址上的 id 值
		let key = md5(id); //把 id 加密，md5 加密
		let list = this.state[key] || []; //根据加密有得到的 id 去获取数据
		if(list.length < 1){
			//通过 ajax 获取数据
			this.getData(key);
		}
		let html = (<ul>
			{
				list.map((item,i)=>{
					let li = (<li key={ `content-${i}` }>
						<img src={ item.img }/>
						<p>{ item.catalog }</p>
						<p>{ item.bytime }</p>
					</li>);
					return li;
				})
			}
		</ul>);
		return html;
	}
}

export { CataContent }
