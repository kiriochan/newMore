//[{...},...{...}]表示数组或链表，省略未写出来的部分


#获取卡片列表
url:card/list

	--params: null

	--return: 
	"cards":[
	{
		"id": ,
		"title": ,//标题
		"card_pic": ,
		"short_info": ,//标题下简介
		"date": ,//日期
		"type": //类别
	},...{ ... }]
	
	"response":{
		"code": ,//网页响应码，表示响应状态，4XX为找不到服务器，5XX为服务器内部问题
		"status": "success"/"fail" //请求是否成功
	}
		

#获取卡片
url:card/item

	--params:
	
	{"card_id": //卡片id}
	
	--return:
	
	"card":{
		id
		title
		short_info
		info //内容简介
		card_pic
		date
		type
		collect_state: 0 or 1 //0：未收藏，点击收藏后可收藏；1：已收藏，点击后取消收藏
							  //后面的state相同
	}
	
	"contents":[
	{
		id
		index //序号
		content_pic
		content //内容文字
	},...{...}]
	
	//下一张card
	"next_card":{
		next_card_id
		next_card_title
		next_card_short_info
		next_card_card_pic
	}
	
	"response":{
		code
		status
	}
	
#收藏卡片
url:action/collect//未收藏，点击收藏后可收藏；已收藏，点击后取消收藏
	--params：
	{
		card_id
		colloct_state //是否收藏
	}
	
	--return: 
	"response":{
		code
		status
	}
	
#获取卡片的评论列表
url:comment/list
	--params
	{
		card_id
	}
	
	--return:
	"comments":[
	{
		id
		content //评论内容
		user_id
		user_name
		user_portrait //用户头像
		praise_state //用户是否点赞
		praise_count //点赞总数
		date //评论发布日期
	},...{...}]
	
	"response":{
		code
		status
	}
	
#发表评论
url:action/comment
	--params
	{
		card_id
		content
		date //发表评论的日期
	}
	
	--return:
	"comment":{
		id
		content //评论内容
		user_id
		user_name
		user_portrait //用户头像
		praise_state //用户是否点赞
		praise_count //点赞总数
		date //评论发布日期
	}
	"response":{
		code
		status
	}
	
#点赞
url:action/praise
	--params
	{
		comment_id
		praise_state //是否点过赞
	}
	
	--return:
	"praise_count": ,
	"response":{
		code
		status
	}

#获取某人的收藏列表，user_id为null即获取用户的列表，下同
url:list/collections
	--params
	user_id
	
	--return
	"collections":[{
		collection_id
		card:{
			id
			title
			short_info
			info //内容简介
			card_pic
			date
		}
	}]
	
#获取某人的关注列表
url:list/followed
	--params
	user_id
	
	--return
	"users":[{
		id
		name
		portrait
	}]
	
#获得某人赞过的评论
url:list/praises
	--params
	user_id
	
	--return
	"praises":[{
		"user":{
			id
			name
			portrait
		},
		"comment":{
			id
			content
			date
		},
		"card":{
			id
			title
			short_info
			card_pic
		},
		"praise":{
			id
			count
		}
	}]
	
#获得某人的评论列表
	--params
	user_id
	
	--return
	"comments":[{
		"user":{
			id
			name
			portrait
		},
		"comment":{
			id
			content
			date
		},
		"card":{
			id
			title
			short_info
			card_pic
		},
		"praise":{
			id
			count
		}
	}]