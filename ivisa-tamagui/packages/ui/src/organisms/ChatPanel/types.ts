export interface ToolCall {
  id: string
  name: string
  args: Record<string, unknown>
}

export interface Message {
  id: string
  role: "user" | "assistant" | "tool"
  content: string | ContentBlock[]
  tool_calls?: ToolCall[]
  tool_call_id?: string
  name?: string
  created_at: Date
}

export interface ContentBlock {
  type: "text" | "image_url"
  text?: string
  image_url?: { url: string }
}

export interface Todo {
  id: string
  content: string
  status: "pending" | "in_progress" | "completed" | "cancelled"
}

export interface HITLRequest {
  id: string
  tool_call: ToolCall
  thread_id: string
}
